import treeBindsState from '@/state/TreeBindsState.js'
import treeApi from '@/api/TreeApi.js'

export const DoctorsIservicesBindsService = {
    state: treeBindsState,
    async fetchIservicesTreeFromServer(requestData){
        state: treeBindsState,
        //handle data from request adapters
        requestData = (requestData) ? requestData : {};
        requestData = {...requestData,
            action:'getIservicesTree',
            component:'health'
        }

        if( treeBindsState.requestData() )  requestData = { ...requestData, ...treeBindsState.requestData() };

        const res = await treeApi.getTreeNodes(requestData);
        if(Object.keys(res).length > 0 && res.items){
            //if simply refresh data from server run refreshItems()
            if(requestData?.id || requestData?.ids){
                treeBindsState.refreshItems(res.items);
            }else{
                treeBindsState.setItems(res.items);
                treeBindsState.setCount(res.count);
            }

        }

        //todo handle error
        return true;
    },


    getIservicesTree(condition){
        if( !condition ) return this.state.getItems();
    },

    async saveBinds( requestData ){
        return  await treeApi.saveBinds( requestData );
    },

    // getCheckNode(node){
    //     let  checkedNodes = {}
    //     checkedNodes[node.key] = {checked:true};
    //
    //     if(node.children){
    //
    //         node.children.forEach( child => checkedNodes = {...checkedNodes, ...this.getCheckNode(child)})
    //     }
    //     return checkedNodes;
    // }


};
