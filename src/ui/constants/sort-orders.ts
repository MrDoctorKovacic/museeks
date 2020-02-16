import { Track, SortOrder, SortBy } from '../../shared/types/interfaces';

// For perforances reasons, otherwise _.orderBy will perform weird check
// the is far more resource/time impactful
const parseArtist = (t: Track): string => t.loweredMetas.artist.toString();
const parseGenre = (t: Track): string => t.loweredMetas.genre.toString();
const parseDateAdded = (t: Track): string => t.dateAdded ? t.dateAdded.getTime().toString() : '0';

// Declarations
const sortOrders = {
  [SortBy.ARTIST]: {
    [SortOrder.ASC]: [
      // Default
      [parseArtist, 'year', 'loweredMetas.album', 'disk.no', 'track.no'],
      null
    ],
    [SortOrder.DSC]: [[parseArtist, 'year', 'loweredMetas.album', 'disk.no', 'track.no'], ['desc']]
  },
  [SortBy.TITLE]: {
    [SortOrder.ASC]: [['loweredMetas.title', parseArtist, 'year', 'loweredMetas.album', 'disk.no', 'track.no'], null],
    [SortOrder.DSC]: [
      ['loweredMetas.title', parseArtist, 'year', 'loweredMetas.album', 'disk.no', 'track.no'],
      ['desc']
    ]
  },
  [SortBy.DURATION]: {
    [SortOrder.ASC]: [['duration', parseArtist, 'year', 'loweredMetas.album', 'disk.no', 'track.no'], null],
    [SortOrder.DSC]: [['duration', parseArtist, 'year', 'loweredMetas.album', 'disk.no', 'track.no'], ['desc']]
  },
  [SortBy.ALBUM]: {
    [SortOrder.ASC]: [['loweredMetas.album', parseArtist, 'year', 'disk.no', 'track.no'], null],
    [SortOrder.DSC]: [['loweredMetas.album', parseArtist, 'year', 'disk.no', 'track.no'], ['desc']]
  },
  [SortBy.GENRE]: {
    [SortOrder.ASC]: [
      [
        parseGenre,
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      null
    ],
    [SortOrder.DSC]: [
      [
        parseDateAdded,
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      ['desc']
    ]
  },
  [SortBy.DATE_ADDED]: {
    [SortOrder.ASC]: [
      [
        parseDateAdded,
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      null
    ],
    [SortOrder.DSC]: [
      [
        parseDateAdded,
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      ['desc']
    ]
  },
  [SortBy.FILESIZE]: {
    [SortOrder.ASC]: [
      [
        'filesize',
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      null
    ],
    [SortOrder.DSC]: [
      [
        'filesize',
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      ['desc']
    ]
  },
  [SortBy.QUALITY]: {
    [SortOrder.ASC]: [
      [
        'quality',
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      null
    ],
    [SortOrder.DSC]: [
      [
        parseDateAdded,
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      ['desc']
    ]
  },
  [SortBy.DATE_ADDED]: {
    [SortOrder.ASC]: [
      [
        parseDateAdded,
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      null
    ],
    [SortOrder.DSC]: [
      [
        parseDateAdded,
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      ['desc']
    ]
  },
  [SortBy.FILESIZE]: {
    [SortOrder.ASC]: [
      [
        'filesize',
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      null
    ],
    [SortOrder.DSC]: [
      [
        'filesize',
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      ['desc']
    ]
  },
  [SortBy.QUALITY]: {
    [SortOrder.ASC]: [
      [
        'quality',
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      null
    ],
    [SortOrder.DSC]: [
      [
        'quality',
        parseArtist,
        'year',
        'loweredMetas.album',
        'disk.no',
        'track.no'
      ],
      ['desc']
    ]
  }
};

export default sortOrders;
