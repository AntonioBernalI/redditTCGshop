// Utility class for handling communication with Devvit
class DevvitMessenger {
  // Send a purchase message to Devvit
  static sendPurchase(cardSlug, price) {
    window.parent.postMessage({
      type: 'purchase',
      data: { cardSlug, price }
    }, '*');
    
    console.log(`Sending purchase to Devvit: ${cardSlug} for ${price}`);
  }
  
  // Send a generic message to Devvit
  static sendMessage(type, data) {
    window.parent.postMessage({
      type,
      data
    }, '*');
    
    console.log(`Sending message to Devvit: ${type}`, data);
  }
}

export default DevvitMessenger;