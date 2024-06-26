import heknowsUs from './songs/he-knows-us'
import whenAllHeartsSingAsOne from './songs/when-all-hearts-sing-as-one'

// https: //gtrlib. com/chords/

export const menu: object = [
  { id: 4, title: 'He Knows Us', src: 'he-knows-us' },
  { id: 1, title: 'When All Hearts Sing as One', src: 'when-all-hearts-sing-as-one' }
  // { id: 2, title: "We Can't Hold Back", src: 'we-cant-hold-back' },
  // { id: 3, title: 'Feed My Faith', src: 'feed-my-faith' },
  // { id: 5, title: '"Two Small Coins"', src: 'two-small-coins' }
]

export const lib: object = {
  async song(path: string) {
    try {
      const songs = {
        'he-knows-us': heknowsUs,
        'when-all-hearts-sing-as-one': whenAllHeartsSingAsOne
      }
      // console. log(songs [path])
      return songs[path]
    } catch (error) {
      console.error('Error while dynamically importing module:', error)
      return null
    }
  }
}
