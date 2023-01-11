package keeper

import (
	"context"

	"amaymon/x/nature/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AddAccount(goCtx context.Context, msg *types.MsgAddAccount) (*types.MsgAddAccountResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx
	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	recepient, err := sdk.AccAddressFromBech32(msg.ToAccount)
	if err != nil {
		return nil, err
	}
	money, err := sdk.ParseCoinsNormalized(string(msg.Amount))
	if err != nil {
		return nil, err
	}

	if err := k.bankKeeper.SendCoins(ctx, sender, recepient, money); err != nil {
		return nil, err
	}

	return &types.MsgAddAccountResponse{}, nil
}
