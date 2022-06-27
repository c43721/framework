import type { ChannelTypes } from '@sapphire/discord.js-utilities';
import type { PieceContext } from '@sapphire/pieces';
import { resolveChannel } from '../lib/resolvers';
import { Argument } from '../lib/structures/Argument';

export class CoreArgument extends Argument<ChannelTypes> {
	public constructor(context: PieceContext) {
		super(context, { name: 'channel' });
	}

	public run(parameter: string, context: Argument.Context): Argument.Result<ChannelTypes> {
		return resolveChannel(parameter, context.message).mapErr((error) => ({
			name: 'UserError',
			identifier: error,
			message: 'The argument did not resolve to a channel.',
			parameter,
			context
		}));
	}
}
