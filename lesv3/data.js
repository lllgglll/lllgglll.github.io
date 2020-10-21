var APP_DATA = {
  "scenes": [
    {
      "id": "0-lesv3p1",
      "name": "LESV3P1",
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
          "yaw": -0.07793104899980108,
          "pitch": -0.3961859895953932,
          "rotation": 0,
          "target": "1-lesv3p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lesv3p2",
      "name": "LESV3P2",
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
          "yaw": 0.008021272977394744,
          "pitch": -0.6889089272961186,
          "rotation": 0,
          "target": "2-lesv3p3"
        },
        {
          "yaw": 0.024059590042249113,
          "pitch": 0.46992739597067157,
          "rotation": 3.141592653589793,
          "target": "0-lesv3p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lesv3p3",
      "name": "LESV3P3",
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
          "yaw": -0.013368245091838205,
          "pitch": 0.5891944648004461,
          "rotation": 3.141592653589793,
          "target": "1-lesv3p2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
