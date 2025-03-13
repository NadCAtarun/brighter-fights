# Brighter Fights

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/brighter-fights?logo=Vercel&name=Vercel)[![DeepSource](https://app.deepsource.com/gh/NadCAtarun/brighter-fights.svg/?label=active+issues&show_trend=true&token=ARUi3u4jWHhV_TQ-UIDSnmCK)](https://app.deepsource.com/gh/NadCAtarun/brighter-fights/)[![DeepSource](https://app.deepsource.com/gh/NadCAtarun/brighter-fights.svg/?label=resolved+issues&show_trend=true&token=ARUi3u4jWHhV_TQ-UIDSnmCK)](https://app.deepsource.com/gh/NadCAtarun/brighter-fights/)

This is a companion app for the fantastic MMORPG
[Brighter Shores](https://www.brightershores.com/)

Based on data from the equally fantastic
[Brighter Shores Wiki](https://brightershoreswiki.org/)

The tool will recommend weapons, and shields
(with links to the relevant pages on the wiki),
based on the following things:

- The target enemy
- The player's faction
    - Cryoknight, Guardian, or Hammermage
- The combat and crafting levels
- An option to prioritize strength (2-handed weapons) or speed (either)

## Notes

The app will never suggest weapons the enemy is immune to,
and will try to pick weapons the enemy is vulnerable to,
whenever possible.

The app used to pick enemies automatically,
but because of personalized striping,
introduced during Combat Rework,
it is no longer feasible.