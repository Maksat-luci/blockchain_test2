package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddAccount = "add_account"

var _ sdk.Msg = &MsgAddAccount{}

func NewMsgAddAccount(creator string, amount string, toAccount string) *MsgAddAccount {
	return &MsgAddAccount{
		Creator:   creator,
		Amount:    amount,
		ToAccount: toAccount,
	}
}

func (msg *MsgAddAccount) Route() string {
	return RouterKey
}

func (msg *MsgAddAccount) Type() string {
	return TypeMsgAddAccount
}

func (msg *MsgAddAccount) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddAccount) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
