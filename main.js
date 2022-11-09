let str = `
010-1234-5678
the1116@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog heap.
abbcccdddd
http://localhost:1234
동해물과 백두산이
`

const h = `  the hello   world     !
`

console.log(str.match(/(?<=@).{1,}/g));