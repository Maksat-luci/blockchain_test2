package keeper

import (
	"amaymon/x/network/types"
)

var _ types.QueryServer = Keeper{}
