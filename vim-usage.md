# Vim Usage Guide

## 1. The "Golden Rule" of Configuration
* **The Error:** Running `source ~/.vimrc` in the terminal.
* **The Fix:** Never run that command in the terminal. Vim reads the file automatically when it starts.
* **To Refresh:** Only use `:source ~/.vimrc` inside Vim.

## 2. Your Custom Shortcuts (The Spacebar Power)
*Leader Key: Spacebar (Use in Normal Mode)*

| Shortcut | Action |
| :--- | :--- |
| `Space` + `w` | Save your file. |
| `Space` + `q` | Quit Vim. |
| `Space` + `j` | Move line down. |
| `Space` + `k` | Move line up. |
| `r` + `n` | Rename variable under the cursor. |
| `Space` + `h` | Clear search highlights. |

## 3. Essential "Built-in" Muscle Memory
* **`i`** : Enter Insert Mode (to type code).
* **`Esc`** : Return to Normal Mode.
* **`V`** *(Shift+V)* : Select a whole line.
* **`y`** : Copy (Yank) selected text.
* **`p`** : Paste after the cursor.
* **`u`** : Undo last action.
* **`Ctrl` + `r`** : Redo action.
* **`gg`** : Jump to top of file.
* **`G`** : Jump to bottom of file.

## 4. Running Your Code (Node/TypeScript)
> *Since you are on a laptop with 4GB RAM, avoid heavy background runners.*

* **To Run:** While your file is open, type `:!ts-node %`
* **The Background Trick:** Press `Ctrl + Z` to hide Vim, run your code in the terminal, then type `fg` and hit `Enter` to jump back into your code.

## 5. File Management

| Goal | Command |
| :--- | :--- |
| Go back to folder view | `:Ex` |
| Open explorer on the side | `:Vex` |
| Create new file | `:e filename.ts` |
| Rename file (on disk) | `:!mv old_name.ts new_name.ts` |
| Delete file (on disk) | :!rm filename.ts |
