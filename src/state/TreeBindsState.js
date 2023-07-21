import { reactive } from 'vue';
import MultiStateManager from '@/services/util/MultiStateManager.js'

//init state
const TreeBindsState = {
    _state : reactive({}),
    ...MultiStateManager,


};
TreeBindsState.state();



export default TreeBindsState;
