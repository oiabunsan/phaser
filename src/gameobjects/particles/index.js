/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * @namespace Phaser.GameObjects.Particles
 */

module.exports = {

    GravityWell: require('./GravityWell'),
    Particle: require('./Particle'),
    ParticleEmitter: require('./ParticleEmitter'),
    ParticleEmitterManager: require('./ParticleEmitterManager'),

    Zones: {
        DeathZone: require('./zones/DeathZone'),
        EdgeZone: require('./zones/EdgeZone'),
        RandomZone: require('./zones/RandomZone')
    }

};
