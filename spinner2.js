const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let duration = 100;

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, duration);
  duration += 150;
}