'use strict';

module.exports = {
	/**
	 * is height node version
	 * @return {Boolean} is height version
	 */
	isSupportEs6: function() {
		if (!process) return false;
		let version = process.versions && process.versions.node;
		if (!version) return false;
		let versionInfo = version.split('.');
		return +versionInfo[0] > 6;
	},

	/**
	 * is node runtime
	 * @return {Boolean} is node runtime
	 */
	isNodeRuntime: function() {
		if (!process) return false;

	}
}