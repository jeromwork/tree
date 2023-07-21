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
    getTreeTableNodesData() {
        return [
            {
                key: '0',
                data: {
                    name: 'Applications',
                    size: '100kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'Vue',
                            size: '25kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '0-0-0',
                                data: {
                                    name: 'vue.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-1',
                                data: {
                                    name: 'native.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-2',
                                data: {
                                    name: 'mobile.app',
                                    size: '5kb',
                                    type: 'Application'
                                }
                            }
                        ]
                    },
                    {
                        key: '0-1',
                        data: {
                            name: 'editor.app',
                            size: '25kb',
                            type: 'Application'
                        }
                    },
                    {
                        key: '0-2',
                        data: {
                            name: 'settings.app',
                            size: '50kb',
                            type: 'Application'
                        }
                    }
                ]
            },
            {
                key: '1',
                data: {
                    name: 'Cloud',
                    size: '20kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '1-0',
                        data: {
                            name: 'backup-1.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    },
                    {
                        key: '1-1',
                        data: {
                            name: 'backup-2.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    }
                ]
            },
            {
                key: '2',
                data: {
                    name: 'Desktop',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '2-0',
                        data: {
                            name: 'note-meeting.txt',
                            size: '50kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '2-1',
                        data: {
                            name: 'note-todo.txt',
                            size: '100kb',
                            type: 'Text'
                        }
                    }
                ]
            },
            {
                key: '3',
                data: {
                    name: 'Documents',
                    size: '75kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '3-0',
                        data: {
                            name: 'Work',
                            size: '55kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-0-0',
                                data: {
                                    name: 'Expenses.doc',
                                    size: '30kb',
                                    type: 'Document'
                                }
                            },
                            {
                                key: '3-0-1',
                                data: {
                                    name: 'Resume.doc',
                                    size: '25kb',
                                    type: 'Resume'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-1',
                        data: {
                            name: 'Home',
                            size: '20kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-1-0',
                                data: {
                                    name: 'Invoices',
                                    size: '20kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '4',
                data: {
                    name: 'Downloads',
                    size: '25kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '4-0',
                        data: {
                            name: 'Spanish',
                            size: '10kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '4-0-0',
                                data: {
                                    name: 'tutorial-a1.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            },
                            {
                                key: '4-0-1',
                                data: {
                                    name: 'tutorial-a2.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    },
                    {
                        key: '4-1',
                        data: {
                            name: 'Travel',
                            size: '15kb',
                            type: 'Text'
                        },
                        children: [
                            {
                                key: '4-1-0',
                                data: {
                                    name: 'Hotel.pdf',
                                    size: '10kb',
                                    type: 'PDF'
                                }
                            },
                            {
                                key: '4-1-1',
                                data: {
                                    name: 'Flight.pdf',
                                    size: '5kb',
                                    type: 'PDF'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '5',
                data: {
                    name: 'Main',
                    size: '50kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '5-0',
                        data: {
                            name: 'bin',
                            size: '50kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-1',
                        data: {
                            name: 'etc',
                            size: '100kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-2',
                        data: {
                            name: 'var',
                            size: '100kb',
                            type: 'Link'
                        }
                    }
                ]
            },
            {
                key: '6',
                data: {
                    name: 'Other',
                    size: '5kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '6-0',
                        data: {
                            name: 'todo.txt',
                            size: '3kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '6-1',
                        data: {
                            name: 'logo.png',
                            size: '2kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '7',
                data: {
                    name: 'Pictures',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '7-0',
                        data: {
                            name: 'barcelona.jpg',
                            size: '90kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-1',
                        data: {
                            name: 'primeng.png',
                            size: '30kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-2',
                        data: {
                            name: 'prime.jpg',
                            size: '30kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '8',
                data: {
                    name: 'Videos',
                    size: '1500kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '8-0',
                        data: {
                            name: 'primefaces.mkv',
                            size: '1000kb',
                            type: 'Video'
                        }
                    },
                    {
                        key: '8-1',
                        data: {
                            name: 'intro.avi',
                            size: '500kb',
                            type: 'Video'
                        }
                    }
                ]
            }
        ];
    },

    getTreeTableNodes() {
        return Promise.resolve(this.getTreeTableNodesData());
    },


    mergeBindsData(node, bindData, type ) {
    let selectedData = {};
    //
    if(!bindData) return ;


        // console.log(node)
        for (const [key, tree] of Object.entries(node)) {
            // console.log(tree.children)
            if(tree.children){

                const currentSelectedData = this.mergeBindsData( tree.children, bindData, type );
                let countSelectedChildren = 0;
                //
                //const selectedChildren = Object.entries(selectedData).filter(item => item.checked);
                for (const [c, child] of Object.entries(node)) {
                    console.log(child)
                    if(currentSelectedData[child.key] && currentSelectedData[child.key].checked) countSelectedChildren++;
                }

                //const selectedChildren = Object.fromEntries( Object.entries(currentSelectedData).filter(([key, value]) => value.checked) )

                const countChildren = Object.keys( tree['children']).length

                console.log(countChildren, '>', countSelectedChildren)

                if(countSelectedChildren > 0){

                    if(!selectedData[tree.key]) selectedData[tree.key] = {};
                    if( countChildren === countSelectedChildren ) {
                        selectedData[tree.key]['checked'] = true;
                    }else if( countChildren > countSelectedChildren ){
                        selectedData[tree.key]['checked'] = false;
                        selectedData[tree.key]['partialChecked'] = true;
                    }
                }
                selectedData = Object.assign(selectedData, currentSelectedData);

                //console.log(Object.keys( selectedChildren).length, Object.keys( tree['children']).length)
                // debugger;
            }

            const bind = bindData[tree.id];

            if( tree?.data?.type === type && bind){
                if(!selectedData[tree.key]) selectedData[tree.key] = {};
                selectedData[tree.key] = {...tree.data, ...bind };
                if( bind.active ) selectedData[tree.key]['checked'] = 'checked';

            }//else selectedData[tree.key] = tree;
        }
    // $.each(node, (t, tree) => {
    //     // if(!tree['children']) return node;
    //     if(tree['children']){
    //
    //         const currentSelectedData = this.mergeBindsData( tree['children'], bindData, type );
    //         let countSelectedChildren = 0;
    //         //
    //         //const selectedChildren = Object.entries(selectedData).filter(item => item.checked);
    //
    //         $.each( tree['children'], (c, child)=> {
    //             if(currentSelectedData[child.key] && currentSelectedData[child.key].checked) countSelectedChildren++;
    //             // debugger;
    //         });
    //         //const selectedChildren = Object.fromEntries( Object.entries(currentSelectedData).filter(([key, value]) => value.checked) )
    //
    //         const countChildren = Object.keys( tree['children']).length
    //
    //         //console.log(countChildren, '>', countSelectedChildren)
    //
    //         if(countSelectedChildren > 0){
    //
    //             if(!selectedData[tree.key]) selectedData[tree.key] = {};
    //             if( countChildren === countSelectedChildren ) {
    //                 selectedData[tree.key]['checked'] = true;
    //             }else if( countChildren > countSelectedChildren ){
    //                 selectedData[tree.key]['checked'] = false;
    //                 selectedData[tree.key]['partialChecked'] = true;
    //             }
    //         }
    //         selectedData = Object.assign(selectedData, currentSelectedData);
    //
    //         //console.log(Object.keys( selectedChildren).length, Object.keys( tree['children']).length)
    //         // debugger;
    //     }
    //
    //     const bind = bindData[tree.id];
    //
    //     if( tree?.data?.type === type && bind){
    //         if(!selectedData[tree.key]) selectedData[tree.key] = {};
    //         selectedData[tree.key] = {...tree.data, ...bind };
    //         if( bind.active ) selectedData[tree.key]['checked'] = 'checked';
    //
    //     }//else selectedData[tree.key] = tree;
    // });

    return selectedData;
},

};
