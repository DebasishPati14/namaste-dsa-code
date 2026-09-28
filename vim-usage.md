# Vim Usage Guide

## 1. The "Golden Rule" of Configuration

- **The Error:** Running `source ~/.vimrc` in the terminal.
- **The Fix:** Never run that command in the terminal. Vim reads the file automatically when it starts.
- **To Refresh:** Only use `:source ~/.vimrc` inside Vim.

---

## 2. Your Custom Shortcuts (The Spacebar Power)

_Leader Key: Spacebar (Use in Normal Mode)_

| Shortcut    | Action                            |
| :---------- | :-------------------------------- |
| `Alt` + `w` | Save your file.                   |
| `Alt` + `q` | Quit Vim.                         |
| `Alt` + `j` | Move line down.                   |
| `Alt` + `k` | Move line up.                     |
| `r` + `n`   | Rename variable under the cursor. |
| `Alt` + `h` | Clear search highlights.          |

---

## 3. Essential "Built-in" Muscle Memory

- **`i`** : Enter Insert Mode (to type code).
- **`Esc`** : Return to Normal Mode.
- **`V`** _(Shift+V)_ : Select a whole line.
- **`y`** : Copy (Yank) selected text.
- **`p`** : Paste after the cursor.
- **`u`** : Undo last action.
- **`Ctrl` + `r`** : Redo action.
- **`gg`** : Jump to top of file.
- **`G`** : Jump to bottom of file.
- **`dd`** : Delete a line.
- **`cw`** : Change word.
- **`.`** : Repeat last action.

---

## 4. Running Your Code (Node/TypeScript)

- **To Run:** While your file is open, type `:!ts-node %`
- **The Background Trick:** Press `Ctrl + Z` to hide Vim, run your code in the terminal, then type `fg` and hit `Enter` to jump back into your code.

---

## 5. File Management

| Goal                      | Command                        |
| :------------------------ | :----------------------------- |
| Go back to folder view    | `:Ex`                          |
| Open explorer on the side | `:Vex`                         |
| Create new file           | `:e filename.ts`               |
| Rename file (on disk)     | `:!mv old_name.ts new_name.ts` |
| Delete file (on disk)     | `:!rm filename.ts`             |

👉 **Note:** If using NERDTree, `:e %/file` may not work as expected.

---

## 6. NERDTree (File Explorer Usage)

| Action            | Key               |
| :---------------- | :---------------- |
| Toggle NERDTree   | `:NERDTreeToggle` |
| Find current file | `:NERDTreeFind`   |
| Open file         | `o`               |
| Open in new tab   | `t`               |
| Open menu         | `m` _(no `:`)_    |
| Create file       | `m` → `a`         |
| Create folder     | `m` → `d`         |
| Refresh           | `r`               |

👉 **Important:** NERDTree is not editable. Don’t use `:` commands inside it.

---

## 7. Fuzzy Finder (Recommended Workflow)

| Action            | Command    |
| :---------------- | :--------- |
| Find files        | `:Files`   |
| Search in project | `:Rg`      |
| Open buffers      | `:Buffers` |

👉 Prefer this over NERDTree for fast navigation.

---

## 8. Close Language Server Protocol (LSP) When Not Needed

To save system resources, especially on a low RAM machine, you can stop the LSP server when you don't need autocomplete or code intelligence, and restart it later.

| Command           | Description                                   |
| :---------------- | :-------------------------------------------- |
| `:LspStopServer`  | Stops the LSP server and frees up resources.  |
| `:LspStartServer` | Starts the LSP server again when you need it. |

Use these commands inside Vim anytime you want to control the LSP manually.

---

## 9. Common Mistakes

- Using `:m` instead of `m` in NERDTree.
- Trying to edit inside NERDTree window (`modifiable is off` error).
- Forgetting that fuzzy finder is faster than file tree navigation.
