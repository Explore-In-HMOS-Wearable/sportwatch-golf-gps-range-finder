import geolocation from '@ohos.geolocation';
import router from '@ohos.router';

export default {
    data: {
        lat: '',
        long: '',
        clubs: [],
        isLoading: true
    },

    onInit() {
        this.loadClubs();
        geolocation.on('locationChange', this.requestInfo, this.locationChange);
    },
    goClubDetails() {
        router.replace({ uri: 'pages/clubDetail/clubDetail' });
    },
    onDestroy() {
        geolocation.off('locationChange', this.locationChange);
    },
    locationChange(location) {
        this.lat = location.latitude;
        this.long = location.longitude;
    },
    requestInfo: {
        'priority': 0x201,
        'timeInterval': 0,
        'distanceInterval': 0,
        'maxAccuracy': 0
    },

    loadClubs() {
        this.isLoading = true;
        setTimeout(() => {
            const mockClubs = [
                {
                    id: 0,
                    name: 'Paris International GC',
                    lat: 48.8566,
                    lon: 2.3522
                },
                {
                    id: 1,
                    name: 'London Fairways',
                    lat: 51.5074,
                    lon: -0.1278
                },
                {
                    id: 2,
                    name: 'Berlin Green Hills',
                    lat: 52.5200,
                    lon: 13.4050
                },
                {
                    id: 3,
                    name: 'Madrid Royal Club',
                    lat: 40.4168,
                    lon: -3.7038
                },
                {
                    id: 4,
                    name: 'Rome Eagle Course',
                    lat: 41.9028,
                    lon: 12.4964
                },
                {
                    id: 5,
                    name: 'Vienna Masters Park',
                    lat: 48.2082,
                    lon: 16.3738
                },
                {
                    id: 6,
                    name: 'Istanbul Golf Club',
                    lat: 41.0960,
                    lon: 29.0223
                }
            ];

            this.clubs = mockClubs;
            this.isLoading = false;
            this.$forceUpdate();
        }, 1500);
    }
};