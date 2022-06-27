import type { PieceContext } from '@sapphire/pieces';
import { resolveBoolean } from '../lib/resolvers';
import { Argument } from '../lib/structures/Argument';

export class CoreArgument extends Argument<boolean> {
	public constructor(context: PieceContext) {
		super(context, { name: 'boolean' });
	}

	public run(parameter: string, context: { readonly truths?: string[]; falses?: readonly string[] } & Argument.Context): boolean {
		const resolved = resolveBoolean(parameter, { truths: context.truths, falses: context.falses });
		if (resolved.isErr()) throw resolved.unwrapErr();
		return resolved.unwrap();
	}
}
