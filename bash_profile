# Setting PATH for Python 3.8
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.8/bin:${PATH}"
export PATH

# Custom Commands
alias l='ls'
alias desk='cd ~/Desktop/;'
alias nyu='cd ~/Documents/NYU/;'
alias capstone='cd /Users/panos/Documents/NYU/1.\ Courses/Capstone/Phonon\ Dark\ Matter/LXe-Phonon/' 
alias sf='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder'
alias hf='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder'
alias sls='sudo ls -h'
alias sshon='sudo systemsetup -setremotelogin on'
alias sshoff='sudo systemsetup -setremotelogin off'
alias python='python3'
alias pip='pip3'
alias restart='sudo shutdown -r now'
alias clera='clear'
alias clere='clear'
alias RAAD='conda activate RAAD; cd /Users/panos/Documents/NYU/6.Extracurricular/23.Cubesat/raad'
alias raad='RAAD'
alias matrix='LC_ALL=C tr -c "[:digit:]" " " < /dev/urandom | dd cbs=$COLUMNS conv=unblock | GREP_COLOR="1;32" grep --color "[^ ]"'
alias g='ddgr'

# Pretty terminal stuffs
git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
export PS1="\[\e[36m\]->> \[\e[34m\]\W\[\e[32m\]\$(git_branch)\[\e[37m\] $ "

#export BASH_IT="/Users/panos/.bash_it"
#export BASH_IT_THEME='pure'
#export CLICOLOR=1
#export LSCOLORS=ExFxCxDxBxegedabagacad

# Load Bash It
#source "$BASH_IT"/bash_it.sh

# Some VPN Stuffs
alias vpn='/opt/cisco/anyconnect/bin/vpn'
export PATH="/usr/local/opt/qt/bin:$PATH"
export PATH="/usr/local/sbin:$PATH"

##
# Your previous /Users/panos/.bash_profile file was backed up as /Users/panos/.bash_profile.macports-saved_2021-09-07_at_23:34:55
##

# MacPorts Installer addition on 2021-09-07_at_23:34:55: adding an appropriate PATH variable for use with MacPorts.
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"
# Finished adapting your PATH environment variable for use with MacPorts.

export PATH="/usr/local/opt/ghostscript:$PATH"
eval "$(/opt/homebrew/bin/brew shellenv)"


# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/panos/miniforge3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/panos/miniforge3/etc/profile.d/conda.sh" ]; then
        . "/Users/panos/miniforge3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/panos/miniforge3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


# MacPorts Installer addition on 2022-06-23_at_11:28:23: adding an appropriate MANPATH variable for use with MacPorts.
export MANPATH="/opt/local/share/man:$MANPATH"
# Finished adapting your MANPATH environment variable for use with MacPorts.

