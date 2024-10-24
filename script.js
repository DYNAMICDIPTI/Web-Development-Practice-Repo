const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = {
    help: "Available commands: help, hack, exit",
    hack: "Hacking in progress... Please wait...",
    exit: "Exiting the terminal. Goodbye!"
};

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        output.innerHTML += `> ${command}\n`;

        if (commands[command]) {
            output.innerHTML += commands[command] + '\n';
        } else {
            output.innerHTML += "Unknown command. Type 'help' for a list of commands.\n";
        }

        output.scrollTop = output.scrollHeight; // Auto scroll to bottom
    }
});