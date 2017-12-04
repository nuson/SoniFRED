# SoniFRED &mdash; Sonification of the Functional Re-adaptive Exercise Device

For the background and supporting information for this repository see
 [https://paulvickers.github.io/SoniFRED/](https://paulvickers.github.io/SoniFRED/).

## Contents of the repository


## Installation requirements
1. The two versions of SoniFRED require Max/MSP. SoniFREDr requires Max/MSP 7 to be installed.
 You can use the unregistered version for free (though if you want to edit the patcher you 
 will need a Max/MSP). See [Max 7.3.4](https://cycling74.com/downloads).
2. SoniFRED was developed in Max/MSP running on macOS. For the patchers to the following 
requirements must be met:
	1. The [`grainstretch~`](https://cycling74.com/tools/grainstretch) object must be installed.
	We recommend putting it in your usual Max externals folder. 
	2. Although adverstised as 64-bit compatible, `grainstretch~` only works in 32-bit
	mode on Max 7 (at least on macOS &mdash; we haven't tried it on Windows).
	3. There is a Mira frame to control SoniFRED from an iPad. This uses the `ejies` package
	for waveform display. You can install `ejies` from the Max package manager. As `ejies`
	needs Java to work, because you a running Max in 32-bit mode, if you are running 
	on macOS you may need to install [Apple's legacy Java 6](https://support.apple.com/kb/dl1572).
	4. The patchers rely on external audio files for generating the soundscape. Where
	licensing permits we have included these in the distribution (see repo contents above). Where
	redistribution was not possible we have provided links to the original files. Make
	sure to fetch a copy and then include all the sound files in the same folder as the
	SoniFRED patcher. 
	
## Running SoniFRED

### Beach soundscape
There are two versions of SoniFRED in this repository. One, `FREDSonifier.maxpat` is 
a standalone Max patcher that generates the beach soundscape. To run it:

1. first open the patcher in Max/MSP and ensure all the sound files are loaded; we used:
	1. `Waves5sPeriod.wav` for the waves sound
	2. The seagulls for the in-goal-range sound
	3. The ocean buoy sample for the low out-of-range sound
	4. The foghorn sample for the high out-of-range sound
	
(You can drop a sound file onto the corresponding box in the top right corner of the patcher.)

2. Next, drop a data file onto the box labelled 'Drop a FRED data file' box in the top
left of the patcher. For example, try the file [`data/fredData8.txt`](data/fredData8.txt).

3. Turn on audio processing in Max.

4. Press the button labelled 'Paused'. 

You should now hear the sound of ocean waves and occasional sounds of gulls, foghorns, and 
buoy bells. The faders can be used to mix the sound levels. If you have an iPad connected, 
the SoniFRED frame should appear in Mira and you can  also control the patcher from there.

For a simplified view, switch Max into presentation mode.

In addition, this version of SoniFRED also allows audification of the data files. To activate
this press the green button labelled 'Live' which should change its label to 'Snapshot'. 
You should immediately here a buzzing sound which is the result of taking all the data
points in the data file, treating each one as an individual sample in an audio buffer and playing that
buffer back in a loop. Different data files will produce different sounds and you can
experiment with the playback rate and other parameters with the 'W-rate', 'D-rate', 'Win'
and 'Dir' controls.

### Experimental rig
There is a second version of SoniFRED which uses steam train sounds. This has been combined
with the beach version into a single Max project which was used in a user study (see [`SoniFRED.maxproj`](src/SoniFRED.maxproj)). The 
project provides access to various modalities via a Mira frame on an iPad. Amongst others
it allows easy switching between the beach and steam train versions.

This version was designed to be used in a live mode directly connected to the FRED machine. 
To allow offline usage:
1. In the window titled 'SonifRED' (or the frame labelled 'SoniFREDGlobal on the iPad) select 'train' 
as the sonification mode.
2. In the window titled 'Data_input' on the 3-way radio buttons on the right hand side of the window.
3. Turn on the toggle labeled 'play test file' by clicking on it. 

To record the sonification to an audio file for later use, press the record button.

You should now hear various train sounds.

### Examples
Example outputs of both sonification techniques are provided in the [`examples`](examples) folder.






## Authors  
* [**Paul Vickers**](https://paulvickers.github.io)
* [**Holger Ballweg**](https://uiae.de/)