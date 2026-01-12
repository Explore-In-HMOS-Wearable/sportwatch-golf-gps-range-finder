export default {
    data: {
        holes: [],
        currentIndex: 0,
        currentHole: {},
        totalStrokes: 0,
        totalPar: 0,
        scoreVsPar: '12',
        avgScore: '16.5'
    },

    onInit() {
        this.holes = [
            {
                number: 1,
                par: 4,
                distance: 380,
                strokes: 0
            },
            {
                number: 2,
                par: 3,
                distance: 160,
                strokes: 0
            },
            {
                number: 3,
                par: 5,
                distance: 480,
                strokes: 0
            },
            {
                number: 4,
                par: 4,
                distance: 410,
                strokes: 0
            },
            {
                number: 5,
                par: 4,
                distance: 360,
                strokes: 0
            },
            {
                number: 6,
                par: 3,
                distance: 175,
                strokes: 0
            },
            {
                number: 7,
                par: 5,
                distance: 505,
                strokes: 0
            },
            {
                number: 8,
                par: 4,
                distance: 395,
                strokes: 0
            },
            {
                number: 9,
                par: 3,
                distance: 150,
                strokes: 0
            }
        ];
        this.updateComputed();
    },

    updateComputed() {
        this.currentHole = this.holes[this.currentIndex];

        let totalStrokes = 0, totalPar = 0, played = 0, diffSum = 0;
        for (let i = 0; i < this.holes.length; i++) {
            const h = this.holes[i];
            totalStrokes += h.strokes || 0;
            totalPar += h.par || 0;
            if (h.strokes > 0) {
                played++;
                diffSum += (h.strokes - h.par);
            }
        }

        this.totalStrokes = totalStrokes;
        this.totalPar = totalPar;

        const diff = totalStrokes - totalPar;
        this.scoreVsPar = totalStrokes === 0 ? '—' : (diff > 0 ? `+${diff}` : `${diff}`);

        if (played === 0) {
            this.avgScore = '—'
        } else {
            const avg = Math.round((diffSum / played) * 10) / 10;
            this.avgScore = avg > 0 ? `+${avg}` : `${avg}`;
        }

        this.$forceUpdate();
    },

    incStroke() {
        const h = this.holes[this.currentIndex];
        h.strokes++;
        this.updateComputed();
    },

    decStroke() {
        const h = this.holes[this.currentIndex];
        h.strokes = h.strokes > 0 ? h.strokes - 1 : 0;
        this.updateComputed();
    },

    nextHole() {
        if (this.currentIndex < this.holes.length - 1) {
            this.currentIndex++;
            this.updateComputed();
        }
    },

    prevHole() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateComputed();
        }
    },

    resetHole() {
        const h = this.holes[this.currentIndex];
        h.strokes = 0;
        this.updateComputed();
    }
};
