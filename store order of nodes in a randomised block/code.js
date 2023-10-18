// If you need to store the order of any number of nodes in a randomised block 
// you can use the following. This example is collected from NMP28 (ponbrx and ponbix)

// Requirements:
// - call block set to randomised
// - a number of question nodes within the block
// - a hidden ranking node to store the order

// Set up the hidden ranking node so that the answer alternatives correspond to 
// the qID of the nodes in the randomised call block. Example:
    // two nodes in the call block: r28_ponbrx, r28_ponbix
    // answer list in the hidden ranking node: 1 == r28_ponbrx, 2 == r28_ponbix

// Add the following JS to custom validation in nodes within the randomised call block.
    // Note that the custom validation changes for each node within the call block

// First node (r28_ponbrx as it is the first qID in the hiddennode)
if (!f('r28_ponbrx_ponbix_order').toBoolean()) { // hidden ranking node ID
    f('r28_ponbrx_ponbix_order_1').set('1') // First qID within the randomised call block
    f('r28_ponbrx_ponbix_order_2').set('2') // Second qID within the randomised call block
}

// Second node (r28_ponbix as it is the second qID in the hiddennode)
if (!f('r28_ponbrx_ponbix_order').toBoolean()) { // hidden ranking node ID
    f('r28_ponbrx_ponbix_order_1').set('2') // Second qID within the randomised call block
    f('r28_ponbrx_ponbix_order_2').set('1') // First qID within the randomised call block
}

