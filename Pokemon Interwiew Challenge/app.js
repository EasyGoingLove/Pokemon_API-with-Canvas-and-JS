
import API from './api.js';
import CanvasController from './CanvasController.js';
import EventHandler from './EventHandler.js';




(async () => {
    const api = new API();
    const canvasController = new CanvasController(api);
    const eventHandler = new EventHandler(api,canvasController);
    
    await canvasController.Draw();//  images to load before canvas draws them 
    await canvasController.Draw(); 
    await eventHandler.Game();
    
    
     
    
})();

