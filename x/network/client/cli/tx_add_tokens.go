package cli

import (
	"strconv"

	"amaymon/x/network/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdAddTokens() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-tokens [amount] [to-address]",
		Short: "Broadcast message addTokens",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount, err := cast.ToInt32E(args[0])
			if err != nil {
				return err
			}
			argToAddress := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddTokens(
				clientCtx.GetFromAddress().String(),
				argAmount,
				argToAddress,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
