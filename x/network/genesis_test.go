package network_test

import (
	"testing"

	keepertest "amaymon/testutil/keeper"
	"amaymon/testutil/nullify"
	"amaymon/x/network"
	"amaymon/x/network/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NetworkKeeper(t)
	network.InitGenesis(ctx, *k, genesisState)
	got := network.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
