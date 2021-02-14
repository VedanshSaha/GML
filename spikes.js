class Spike{
    constructor(x,y,e){
      this.spike = createSprite(x,y)
      this.image = loadImage("spike.svg")
      this.spike.addImage("Image Of The Deadly Spike",this.image)  
      this.spike.scale=0.6
      //this.spike.debug = true
      this.spike.lifetime = e;
      //var spikeGroup = new Group()
      //spikeGroup.add(this.spike)
      //console.log(e)
      //spikeGroup.add(this.spike)
      //die(this.spike)
    }

    
}