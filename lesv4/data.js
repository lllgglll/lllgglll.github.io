var APP_DATA = {
  "scenes": [
    {
      "id": "0-lesv4p1",
      "name": "LESV4P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09322521945347617,
          "pitch": -0.42258195917080066,
          "rotation": 0,
          "target": "1-lesv4p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lesv4p2",
      "name": "LESV4P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0639083762822068,
          "pitch": -0.6625887771075032,
          "rotation": 0,
          "target": "2-lesv4p3"
        },
        {
          "yaw": 0.019474454343477277,
          "pitch": 0.4462868158042692,
          "rotation": 3.141592653589793,
          "target": "0-lesv4p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lesv4p3",
      "name": "LESV4P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
