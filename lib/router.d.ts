/**
 * Returns a function that adds a route to the path initially passed in
 *
 * e.g. `(/root) ... (/sample) => /root/sample`
 * @param routerPath Path to extend
 */
export declare const ExtendRouter: (routerPath: string) => (route: string) => string;
