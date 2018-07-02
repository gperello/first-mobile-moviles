cd C:\Program Files\Java\jdk1.8.0_101\bin

jarsigner -storepass First13579 -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore D:\apps\first-mobile-moviles\firma\firstchoferes.keystore D:\apps\first-mobile-moviles\platforms\android\build\outputs\apk\android-release-unsigned.apk firstchoferes
jarsigner -verify -verbose -certs D:\apps\first-mobile-moviles\platforms\android\build\outputs\apk\android-release-unsigned.apk

cd C:\Program Files (x86)\Android\android-sdk\build-tools\23.0.1

zipalign -v 4 D:\apps\first-mobile-moviles\platforms\android\build\outputs\apk\android-release-unsigned.apk D:\apps\first-mobile-moviles\platforms\android\build\outputs\apk\android-release.apk

