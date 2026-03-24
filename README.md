#!/bin/bash
# ============================================================
# НИИЧАЗ — Сборка продакшн версии с обфускацией
# Запускать: bash build.sh
# Требует: npm install -g javascript-obfuscator
# ============================================================

echo "▶ НИИЧАЗ — Сборка продакшн версии"
echo ""

# Проверяем наличие обфускатора
if ! command -v javascript-obfuscator &> /dev/null; then
  echo "⚙ Устанавливаем javascript-obfuscator..."
  npm install -g javascript-obfuscator
fi

# Создаём папку dist
rm -rf dist
mkdir -p dist/js dist/css

# Копируем статику
cp index.html dist/
cp css/style.css dist/css/
cp js/data.js dist/js/    # data.js не трогаем — он содержит артефакты которые нужно редактировать
cp js/auth.js dist/js/    # auth.js не трогаем — его редактирует владелец вручную

echo "⚙ Обфускация app.js..."
javascript-obfuscator js/app.js \
  --output dist/js/app.js \
  --compact true \
  --control-flow-flattening true \
  --control-flow-flattening-threshold 0.5 \
  --dead-code-injection false \
  --identifier-names-generator hexadecimal \
  --rename-globals false \
  --string-array true \
  --string-array-encoding base64 \
  --string-array-threshold 0.75 \
  --unicode-escape-sequence false \
  --self-defending true

echo "⚙ Обфускация supabase.js..."
javascript-obfuscator js/supabase.js \
  --output dist/js/supabase.js \
  --compact true \
  --control-flow-flattening true \
  --control-flow-flattening-threshold 0.4 \
  --identifier-names-generator hexadecimal \
  --string-array true \
  --string-array-encoding base64 \
  --string-array-threshold 0.75 \
  --self-defending true

echo ""
echo "✓ Готово! Продакшн версия в папке /dist"
echo "  Загружай содержимое /dist на GitHub Pages"
