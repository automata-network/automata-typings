/*
 * Copyright (c) 2022 automata-network/witness-v2 authors and contributors.
 * This software may be modified and distributed under the terms of MIT license.
 * Refer to the LICENSE file for details.
 */
const chainBridgeDefs = {
  types: {
    ResourceId: '[u8; 32]',
    DepositNonce: 'u64',
    ProposalStatus: {
      _enum: ['Initiated', 'Approved', 'Rejected']
    },
    ProposalVotes: {
      votes_for: 'Vec<AccountId>',
      votes_against: 'Vec<AccountId>',
      status: 'ProposalStatus'
    },
    BridgeTokenId: 'U256',
    BridgeChainId: 'u8'
  }
}

export default chainBridgeDefs
