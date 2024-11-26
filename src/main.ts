import { app, safeStorage } from 'electron';

// REPLACE WITH YOUR KEY
const ENCRYPTED_KEY = "7631303927e7f855208cccf5100737618caf636f9af639267dc88684bbe6c7f57d735f85d46236c90de0fb5feccea97ca6f51dd1d3752e1a57705f0fbb7b6a80c47b88848bd6111de36586edccef0ff7f7b3243c90ec377bf19a0e46676a71";

app.whenReady().then(() => {
    if (!safeStorage.isEncryptionAvailable()) {
        console.error("Encryption is not available, something went wrong.");
        app.quit();
    }

    const encryptedBuffer = Buffer.from(ENCRYPTED_KEY, 'hex');
    const decryptedKey = safeStorage.decryptString(encryptedBuffer);

    if (!decryptedKey) {
        console.error("Decryption failed, something went wrong.");
        app.quit();
    }

    console.log("Decrypted key:", decryptedKey);

    // kill app
    app.quit();
});
