#!/usr/bin/env ruby
require 'rubygems'

VERSION_STRING = ENV['VERSION'] || File.read('VERSION').chomp

namespace :version do
  desc "Bump the version number in the VERSION file"
  task :bump do
    new_version_string = VERSION_STRING.split('.').map(&:to_i)
    old_version_tiny   = new_version_string[-1]
    new_version_tiny   = old_version_tiny + 1
    new_version_string[-1] = new_version_tiny
    new_version_string = new_version_string.map(&:to_s).join('.')
    sh "echo '#{new_version_string}' > VERSION"
    sh "git commit -m 'Bumped the version to #{new_version_string}.' VERSION"
  end

  desc "Tag the current revision as release #{VERSION_STRING}"
  task :tag do
    sh "git tag -s #{VERSION_STRING} -m 'Released version #{VERSION_STRING}.'"
  end
end
