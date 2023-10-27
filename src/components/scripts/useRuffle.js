import { useEffect } from 'react'
import useScript from './useScript'
/*
 * @param {string} gsource - the source of the swf
 * @param {string} Rufflecontainer - the container that the player will be stored in
 * @param {number} width - the width of the ruffle player
 * @param {number} height - the height of the ruffle player
 */

// Declaring width and height for the player isnt reccomeded
// because it will automatically take 100% of your ruffleContainer
// But feel free to set the width if you would like to

const useRuffle = (Rufflecontainer, gsource, width = '100%', height = '100%') => {
  if (!Rufflecontainer) throw new Error('Rufflecontainer is required')
  useScript('/ruffle/ruffle.js')

  useEffect(() => {
    window.RufflePlayer = window.RufflePlayer || {}
    window.RufflePlayer.config = {
      // Options affecting files only
      autoplay: 'auto',
      unmuteOverlay: 'visible',
      backgroundColor: '#1A202C',
      letterbox: 'fullscreen',
      warnOnUnsupportedContent: true,
      contextMenu: true,
      showSwfDownload: false,
      upgradeToHttps: window.location.protocol === 'https:',
      maxExecutionDuration: { secs: 15, nanos: 0 },
      logLevel: 'error',
      base: null,
      menu: true,
      salign: '',
      scale: 'showAll',
      quality: 'high',
      splashScreen: false,
    }

    const initializeRufflePlayer = () => {
      if (window.RufflePlayer && typeof window.RufflePlayer.newest === 'function') {
        const ruffle = window.RufflePlayer.newest()
        const player = ruffle.createPlayer()
        Rufflecontainer.current.appendChild(player)
        player.style.width = width
        player.style.height = height
        player
          .load(gsource, {
            allowScriptAccess: false, // if false swf cant interact with page (recommended false)
          })
          .then(() => {
            console.log('swf loaded')
          })
          .catch(error => {
            console.log('swf load error:', error)
          })
      } else {
        setTimeout(initializeRufflePlayer, 100) // Retry in 100ms
      }
    }

    if (document.readyState === 'complete') {
      initializeRufflePlayer()
    } else {
      window.addEventListener('load', initializeRufflePlayer)
      return () => {
        window.removeEventListener('load', initializeRufflePlayer) // Clean up the event listener
      }
    }
  }, [Rufflecontainer, gsource, width, height])
}

export default useRuffle
