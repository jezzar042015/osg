const song: object = {
  title: 'When All Hearts Sing as One',
  lyrics: [
    {
      line: 1,
      type: 'line',
      chuncks: [
        { c: 1, chord: 'F', male: 'D', chunck: "Earth cries out ev'ry day " },
        { c: 2, chord: 'Am', male: 'F#m', chunck: ' day ' }
      ]
    },
    {
      line: 2,
      type: 'line',
      chuncks: [
        { c: 1, chord: '', male: '', chunck: 'So ' },
        { c: 2, chord: 'C', male: 'A', chunck: 'many have lost their way ' },
        { c: 3, chord: 'Dm', male: 'Bm', chunck: ' way ' }
      ]
    },
    {
      line: 3,
      type: 'line',
      chuncks: [
        { c: 1, chord: 'F', male: 'D', chunck: 'Wars never cease ' },
        { c: 2, chord: 'Am', male: 'F#m', chunck: 'fighting for peace ' }
      ]
    },
    {
      line: 4,
      type: 'line',
      chuncks: [
        { c: 1, chord: 'G', male: 'E', chunck: 'Man can not find the  ' },
        { c: 2, chord: 'Dm', male: 'Bm', chunck: 'answers' },
        { c: 2, chord: 'Dm7', male: 'Bm7', chunck: '' }
      ]
    }
  ]
}

export default song
