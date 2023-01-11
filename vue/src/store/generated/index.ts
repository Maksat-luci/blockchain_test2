// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import AmaymonNature from './amaymon.nature'
import AmaymonNetwork from './amaymon.network'


export default { 
  AmaymonNature: load(AmaymonNature, 'amaymon.nature'),
  AmaymonNetwork: load(AmaymonNetwork, 'amaymon.network'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}