export default {
    data: {
        current: 0,
        club: {
            id: 6,
            name: 'Istanbul Golf Club',
            lat: 41.0960,
            lon: 29.0223,
            distance: 10.9,
            address: 'Sarıyer, İstanbul',
            phone: '+90 212 000 00 00',
            holes: 18,
            par: 72,
            rating: 4.2
        }
    },

    onInit() {
        try {
            const router = require('@system.router');
            const p = router.getParams();
            if (p && p.club) { this.club = p.club; }
        } catch (_) {}
    },

    onSwipe(e) {
        const i = (e && typeof e.index === 'number') ? e.index :
            (e && e.detail && typeof e.detail.index === 'number') ? e.detail.index : 0;
        this.current = i;
    }
};
