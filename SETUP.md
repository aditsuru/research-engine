# ⚡ Team Quickstart Guide: Setting up your Dev Environment

### Step 1: Install `mise` (One-Time Setup)

| OS                       | Installation Command      |
| ------------------------ | ------------------------- | --- |
| **Linux / macOS**        | `curl https://mise.run    | sh` |
| **Windows (PowerShell)** | `winget install jdx.mise` |

### Step 2: Configure Your Shell (One-Time Setup)

You must tell your shell to use `mise`. Add this line to your configuration file (e.g., `~/.zshrc` or `~/.bashrc`):

```bash
# Replace `<your_shell>` with `bash` or `zsh`.
eval "$(~/.local/bin/mise activate <your_shell>)"
```

If you’re on Windows, you don’t need to set up shell activation the same way. PowerShell users are already good to go after installing mise with winget, and it’ll handle shims automatically. No extra config step required.

> [!Warning]
>
> Restart your terminal to apply this change.

### Step 3: Setup Project

1.  Clone the repository and enter the project folder:

    ```bash
    git clone https://github.com/Homies-Tech-Innovation/research-engine-server.git
    ```

2.  Run the install command.

    ```bash
    mise install
    ```

### 4\. Start Development

You can now use the project's required tools immediately:

```bash
# Start your project
bun run dev
```
