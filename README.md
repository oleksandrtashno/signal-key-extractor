# What is it?
This script decrypts database key of Signal messenger. Currently Signal does not support moving chat history from one desktop client to another. Chat history is stored in an encrypted SQLite3 database file: `"C:\Users\<USER>\Appdata\Signal\sql\db.sqlite"`. Encrypted database key is stored in config.json file: `C:\Users\<USER>\AppData\Roaming\Signal\config.json`
You cannot simply copy all folders to another machine because it would not be able to decrypt database key. However you can decrypt it on your old machine and transfer it to a new one in plain-text format. 
## How to use?
1. Locate your encrypted key:
  * On you OLD machine, open file  `C:\Users\<USER>\AppData\Roaming\Signal\config.json` and copy value of field "encryptedKey":

    ![image](https://github.com/user-attachments/assets/f16a76a0-8c7a-41ef-906b-0aefd351f636)

2. Run the script:
  * `git clone https://github.com/oleksandrtashno/signal-key-extractor.git`
  * `cd signal-key-extractor`
  * in file src/main.ts set ENCRYPTED_KEY varible to the value copied from config.json
  * `npm i`
  * `npm run build`
  * `npm start` - if all goes well, decrypted database key would be printed out:

![image](https://github.com/user-attachments/assets/2c2cc5ed-eaa6-47aa-9048-51af85e2208d)

3. Install Signal on you NEW Windows machine and log in.
4. Quit Signal.
5. Delete folder `"C:\Users\<USER>\Appdata\Signal"` on NEW machine
6. Move folder `"C:\Users\<USER>\Appdata\Signal"` from OLD machine to NEW to the same location
7. Open file `C:\Users\<USER>\Appdata\Signal\config.json` on NEW machine, change field name `encryptedKey` to `key` and set it's value to the one obtained in step 2.
8. Start Signal. Your chat history should now be anailable on new machine.

