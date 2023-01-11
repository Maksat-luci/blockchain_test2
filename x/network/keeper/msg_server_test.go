package keeper_test

import (
	"context"
	"testing"

	keepertest "amaymon/testutil/keeper"
	"amaymon/x/network/keeper"
	"amaymon/x/network/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NetworkKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
