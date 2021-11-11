// Liste 5 objetos nativos
console.log(Object)
console.log(Function)
console.log(Array)
console.log(String)
console.log(Number)

// Liste 5 objetos do browser
console.log(window)
console.log(document)
console.log(navigator)
console.log(location)
console.log(history)

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof window.onafterprint !== 'undefined') {
	console.log('EXISTE')
} else {
	console.log('NÃO EXISTE')
}
