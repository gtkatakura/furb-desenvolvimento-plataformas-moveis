class Period
  attr_reader :start, :end

  def initialize(start, ends)
    @start = start
    @end = ends
  end

  def ==(other)
    self.end == other.end && self.start == other.start
  end
end