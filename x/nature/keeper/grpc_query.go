package keeper

import (
	"amaymon/x/nature/types"
)

var _ types.QueryServer = Keeper{}
