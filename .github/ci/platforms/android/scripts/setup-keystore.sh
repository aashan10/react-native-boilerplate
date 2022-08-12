#!/bin/bash

echo "> Copying keystore content.."
cd "$GITHUB_WORKSPACE" || exit 1
cd android/app || exit 1
touch "$ANDROID_KEYSTORE_NAME.asc"
echo "$ANDROID_KEYSTORE_CONTENT" > "$ANDROID_KEYSTORE_NAME.asc"
gpg -d --passphrase "$KEYSTORE_GPG_PASSWORD" --batch "$ANDROID_KEYSTORE_NAME.asc" > "$ANDROID_KEYSTORE_NAME"
echo "> Keystore content copied!"
echo "> Managing permissions.."
cd ../
chmod +x gradlew
cd "$GITHUB_WORKSPACE" || exit 1

echo "> Preparing build files.."
GRADLE_PROPERTIES_PATH=$GITHUB_WORKSPACE/android/gradle.properties
sed -i "s/{{PROD_UPLOAD_KEYSTORE_FILE}}/$ANDROID_KEYSTORE_NAME/g" "$GRADLE_PROPERTIES_PATH"
sed -i "s/{{PROD_UPLOAD_KEYSTORE_PASSWORD}}/$ANDROID_KEYSTORE_PASSWORD/g" "$GRADLE_PROPERTIES_PATH"
sed -i "s/{{PROD_UPLOAD_KEY_ALIAS}}/$ANDROID_KEY_ALIAS/g" "$GRADLE_PROPERTIES_PATH"
sed -i "s/{{PROD_UPLOAD_KEY_PASSWORD}}/$ANDROID_KEY_PASSWORD/g" "$GRADLE_PROPERTIES_PATH"