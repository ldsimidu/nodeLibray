# Leitor de Arquivo via Linha de Comando

Este pequeno script em Node.js permite ler e exibir no terminal o conteúdo de um arquivo de texto passado como argumento.


## Leitor de arquivos em JS:

```javascript
const fs = require('fs'); // Importa o módulo 'fs' para manipulação de arquivos (File System)
```

👉 Responsável por permitir que o Node.js leia arquivos locais.

```javascript
const path = process.argv; // Captura todos os argumentos da linha de comando
const link = path[2]; // Pega o terceiro argumento, que deve ser o caminho do arquivo
```

O Node.js armazena os argumentos passados na variável process.argv em forma de array.
- path[0] → caminho do Node
- path[1] → caminho do arquivo .js
- path[2] → argumento passado pelo usuário (neste caso, o caminho do arquivo que queremos ler).

```javascript
fs.readFile(link, 'utf-8', (erro, texto) => console.log(texto));
```

---

Tendo em vista os arquivos 'txt' deste projeto:

```bash
node leitor.js ../arquivo/exemplo.txt
```

Resultado esperado:

```bash
exemplo.txt
[conteúdo do arquivo exemplo.txt exibido aqui]
```