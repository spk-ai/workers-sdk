import { setProfile } from "../user";
import { createWranglerProfileStore } from "../user/profile-store";

/**
 * Resolve the auth profile from directory bindings (or fall back to "default")
 * and set it on the global OAuth flow singleton.
 *
 * This runs at import time so that library consumers (e.g. the Vite plugin)
 * get profile resolution automatically — the CLI's yargs handler will
 * override this later with the explicit `--profile` flag if one was provided.
 */
export function initProfileResolution(): void {
	const profile = createWranglerProfileStore().resolve({
		cwd: process.cwd(),
	});

	setProfile(profile);
}
