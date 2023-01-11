package keeper_test

import (
	"context"
	"testing"

	keepertest "amaymon/testutil/keeper"
	"amaymon/x/nature/keeper"
	"amaymon/x/nature/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NatureKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
