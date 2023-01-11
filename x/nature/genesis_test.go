package nature_test

import (
	"testing"

	keepertest "amaymon/testutil/keeper"
	"amaymon/testutil/nullify"
	"amaymon/x/nature"
	"amaymon/x/nature/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NatureKeeper(t)
	nature.InitGenesis(ctx, *k, genesisState)
	got := nature.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
