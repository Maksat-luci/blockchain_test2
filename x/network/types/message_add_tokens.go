package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddTokens = "add_tokens"

var _ sdk.Msg = &MsgAddTokens{}

func NewMsgAddTokens(creator string, amount int32, toAddress string) *MsgAddTokens {
	return &MsgAddTokens{
		Creator:   creator,
		Amount:    amount,
		ToAddress: toAddress,
	}
}

func (msg *MsgAddTokens) Route() string {
	return RouterKey
}

func (msg *MsgAddTokens) Type() string {
	return TypeMsgAddTokens
}

func (msg *MsgAddTokens) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddTokens) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddTokens) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
