package keeper_test

import (
	"testing"

	testkeeper "amaymon/testutil/keeper"
	"amaymon/x/nature/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NatureKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
